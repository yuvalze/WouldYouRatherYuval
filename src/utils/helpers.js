

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

