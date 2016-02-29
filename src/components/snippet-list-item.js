import React from 'react';

export default (props) => {
  function renderBody(){
    return {
      __html: props.body
    };
  }
  function renderTags(){
    return props.tags.map( (tag) => {
      return <span key={tag} className="tag">{tag}</span>;
    });
  }
  return (
    <div className="snippet-item">
      <h5>{props.title}</h5>
      {renderTags()}
      <div dangerouslySetInnerHTML={renderBody()}></div>
    </div>
  );
};
