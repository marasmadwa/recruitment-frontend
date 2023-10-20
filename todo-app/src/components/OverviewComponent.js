import React from "react";

const OverviewComponent = (props) => {
  const content = props.overViewContent;
  return (
    <>
      <div>
        <h2>{content.overview}</h2>
        <p>{content.description}</p>
        <h2>{content.keyFeatures}</h2>
        <ul>
          <h3>{content.taskList}</h3>
          {content.taskListItems.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
        <ul>
          <h3>{content.howTo}</h3>
          {content.howToList.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
        <p>{content.summary}</p>
      </div>
    </>
  );
};

export default OverviewComponent;
