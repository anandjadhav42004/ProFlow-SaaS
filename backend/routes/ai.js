const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post('/generate-tasks', auth, async (req, res) => {
    const { projectName } = req.body;
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `Generate exactly 5 technical tasks for: "${projectName}". Return ONLY a JSON array of strings.`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text().replace(/```json|```/g, "").trim();
        res.json(JSON.parse(text));
    } catch (err) {
        // Fallback tasks if AI fails
        res.json(["Setup Database", "Build API", "Create UI", "Testing", "Deployment"]);
    }
});

module.exports = router;