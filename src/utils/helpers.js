

export function getAnsweredQuestionsArr (authedUserId, questionsObj, isAnswered) {
    let questionResult;
    const questionsArr =  Object.values(questionsObj || {});
    if (isAnswered) {
        questionResult = questionsArr.filter(question => 
            (((question.optionOne||{}).votes ||[]).concat((question.optionTwo||{}).votes ||[])).includes(authedUserId)
        )
    }
    else {
        questionResult = questionsArr.filter(question => 
            !(((question.optionOne||{}).votes ||[]).concat((question.optionTwo||{}).votes ||[])).includes(authedUserId)
        )
    }
    questionResult.sort((a,b) => b.timestamp - a.timestamp);
    return questionResult;
}

export function isUserAnsweredQuestion (questionId, UserData) {
    const userAnswered = Object.keys((UserData ||{}).answers || {});
    return (userAnswered || []).includes(questionId);
}

// return Object statistics
// optionOneNumber, optionOnePercent, optionTwoNumber, optionTwoPercent, totalNumberVote, optionSelectedByUser
export function getQuestionStatistics(questionData, authedUserId) {
    const optionOneNumber = (((questionData || {}).optionOne || {}).votes ||[]).length;
    const optionTwoNumber = (((questionData || {}).optionTwo || {}).votes ||[]).length;
    const totalNumberVote = optionOneNumber + optionTwoNumber;
    const optionOnePercent = (optionOneNumber / totalNumberVote * 100).toFixed(2);
    const optionTwoPercent = (optionTwoNumber / totalNumberVote * 100).toFixed(2);
    let optionSelectedByUser;
    if (questionData.optionOne.votes.includes(authedUserId)) {
        optionSelectedByUser = 'optionOne';
    }
    else if (questionData.optionTwo.votes.includes(authedUserId)) {
        optionSelectedByUser = 'optionTwo';
    }
    return {optionOneNumber, optionOnePercent, optionTwoNumber, optionTwoPercent, totalNumberVote, optionSelectedByUser};
}

