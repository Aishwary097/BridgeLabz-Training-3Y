const feedback = "Great product! Fast delivery and amazing sound quality!";
const normalizedFeedback = feedback.toLowerCase();
const wordCount = feedback.trim().split(/\s+/).length;
const containsNegativeFeedback = normalizedFeedback.includes("bad") || normalizedFeedback.includes("poor");
const feedbackResult = containsNegativeFeedback ? "Needs Improvement" : "Positive Feedback";

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);
console.log(feedbackResult);
