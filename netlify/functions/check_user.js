exports.handler = async function(event, context) {
  const { userId } = event.queryStringParameters;

  // 🔁 จำลองสิทธิ์ผู้ใช้แบบง่าย
  const knownUsers = {
    "Ua7d9f66661485ad713432e99d8d99e11": "admin",
    "U987654321": "user"
  };

  const role = knownUsers[userId] || "user";

  return {
    statusCode: 200,
    body: JSON.stringify({ role })
  };
};
