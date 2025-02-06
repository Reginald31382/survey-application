import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css"; // Default SurveyJS theme

const surveyJson = {
  title: "Customer Feedback Survey",
  description: "We value your feedback. Please answer the following questions.",
  elements: [
    {
      name: "name",
      type: "text",
      title: "What is your name?",
      isRequired: true,
    },
    {
      name: "email",
      type: "text",
      inputType: "email",
      title: "What is your email?",
      isRequired: true,
    },
    {
      name: "satisfaction",
      type: "radiogroup",
      title: "How satisfied are you with our service?",
      isRequired: true,
      choices: [
        { value: "1", text: "Very Dissatisfied" },
        { value: "2", text: "Dissatisfied" },
        { value: "3", text: "Neutral" },
        { value: "4", text: "Satisfied" },
        { value: "5", text: "Very Satisfied" },
      ],
    },
    {
      name: "improvements",
      type: "comment",
      title: "What can we improve?",
      isRequired: false,
    },
  ],
};

const SurveyComponent = () => {
  const survey = new Model(surveyJson);

  survey.onComplete.add((sender) => {
    console.log("Survey Results: ", sender.data);
  });

  return <Survey model={survey} />;
};

export default SurveyComponent;
