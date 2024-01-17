const callOpenAI = async (userInput) => {
    const openAiEndpoint = "https://api.openai.com/v1/chat/completions";
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  
    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userInput }],
      temperature: 0.7
    };
  
    try {
      const response = await fetch(openAiEndpoint, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      });
  
      const data = await response.json();
      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error:', error);
      return "Error fetching response from OpenAI.";
    }
  };
  
  export default callOpenAI;