import Predictions, { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';


async function ProcessChatText(content, sourceLang, tagretLang) {

    let transcriptMessage = await Predictions.convert({
        translateText: {
            source: {
                text: content,
                language: sourceLang, // defaults configured on aws-exports.js
                // supported languages https://docs.aws.amazon.com/translate/latest/dg/how-it-works.html#how-it-works-language-codes
            },
            targetLanguage: tagretLang,
            settings: {
                formality: "FORMAL"   // (smm) use formal language whenever possible
            }
        }
    });
    return transcriptMessage.text
}
export default ProcessChatText
