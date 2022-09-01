import React from 'react';

const Directory = (props) => {
  return (
    <div>
      {props.file.name}
      <ul>
        {props.file.contents.map((content) => {
          let view =
            content.type === 'directory' ? (
              <Directory file={content} />
            ) : (
              <div>
                <li>{content.name}</li>
              </div>
            );
          return view;
        })}
      </ul>
    </div>
  );
};

export default Directory;
