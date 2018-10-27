

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
    return questionResult;
}

