const { matterMarkdownAdapter } = require("@elog/cli");

const format = async (doc, imageClient) => {
  // 处理 draft 字段
  doc.properties.draft = ["true", true].includes(doc.properties.draft);

  // 清理不需要的字段
  ["status", "date", "updated"].forEach(field => delete doc.properties[field]);

  // 处理封面图片
  if (doc.properties.cover) {
    doc.properties.cover = await imageClient.uploadImageFromUrl(doc.properties.cover, doc);
  }

  // 时间格式转换器（新增核心逻辑）
  const convertToISOWithoutMillis = (datetimeStr) => {
    try {
      // 将 Notion 原始时间格式转换为标准 ISO 格式
      const normalized = datetimeStr
        .replace(/(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2})/, "$1T$2Z") // 格式修正
        .replace(/\.\d+Z$/, "Z"); // 移除毫秒

      // 验证并生成目标格式
      const dateObj = new Date(normalized);
      if (isNaN(dateObj)) throw new Error("Invalid date");
      
      return dateObj
        .toISOString()
        .replace(/\.\d{3}Z$/, "Z"); // 强制去除毫秒
    } catch (error) {
      console.error(`时间格式转换失败 (${datetimeStr}):`, error);
      return datetimeStr; // 保留原始值用于调试
    }
  };

  // 处理时间字段（新增格式转换）
  ["publishDate", "updatedDate"].forEach(field => {
    if (doc.properties[field]) {
      doc.properties[field] = convertToISOWithoutMillis(doc.properties[field]);
    }
  });

  // 生成最终内容
  doc.body = matterMarkdownAdapter(doc);
  return doc;
};

module.exports = { format };