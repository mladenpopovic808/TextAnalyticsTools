# Text Analytics Tools

## Overview
Text Analytics Tools is a web application that enables users to analyze text using the Dandelion API. This application supports four key text analysis tools: **Entity Extraction**, **Text Similarity**, **Language Detection**, and **Sentiment Analysis**. Users can easily interact with the API through an intuitive graphical interface.

## Features
- **Entity Extraction**: Identify key entities such as locations, famous people, brands, and events within the provided text.
- **Text Similarity**: Calculate the semantic similarity between two pieces of text.
- **Language Detection**: Determine the language of the entered text.
- **Sentiment Analysis**: Analyze the sentiment of the input text and assess its emotional tone.

## Scenario
Users can enter their Dandelion API token, which is used for authentication when sending requests to the API. The token can be stored in the browser to avoid re-entering it with each application launch.

### Application Pages
1. **Token Configuration**: A page for entering and editing the API token.
2. **Entity Extraction**: A tool for finding entities in text, with optional parameters such as `min_confidence` and `include`.
3. **Text Similarity**: A tool for comparing the semantic similarity between two texts.
4. **Language Detection**: A tool for detecting the language with an option to clean the text.
5. **Sentiment Analysis**: A tool for analyzing sentiment with the option to select the language.
6. **History**: A view of the history of all API calls made, along with timestamps.

## How to Use
1. Register at [Dandelion](https://dandelion.eu/) to obtain your API token.
2. Enter your token on the configuration page.
3. Select a tool from the menu for text analysis.
4. Input the desired text and adjust the optional parameters.
5. Click "Submit" to send the request and view the results.

