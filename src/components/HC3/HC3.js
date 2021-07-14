import React, { useRef, useState } from 'react';
import { HC3Data } from '../../data/HC3Data';
import HC3onPress from './HC3onPress';
import './HC3.css';

function HC3Component(props) {
  const [pressed, isPressed] = useState(false);
  const divRef = useRef();
  console.log(pressed);

  return (
    <>
      {!pressed ? (
        <div
          id="HC3"
          ref={divRef}
          style={{
            backgroundColor: `${props.bg_color}`,
            backgroundImage: `url(${props.bg_image.image_url})`,
          }}
          className="HC3"
        >
          <div className="HC3--content">
            <h1>{props.title}</h1>
            <h3 style={{ color: '#131313' }}>{props.description}</h3>
            <a
              // href={props.cta[0].url}
              onClick={() => isPressed((pressed) => !pressed)}
              style={{
                backgroundColor: `${props.cta[0].bg_color}`,
                color: `${props.cta[0].text_color}`,
              }}
              className="HC3--btn"
            >
              {props.cta[0].text}
            </a>
          </div>
        </div>
      ) : (
        <div className="NewHC3">
          <HC3onPress />
          <div
            style={{
              transform: 'translateX(-1%)',
              margin: '3% 0%',
              backgroundColor: `${props.bg_color}`,
              backgroundImage: `url(${props.bg_image.image_url})`,
            }}
            className="HC3"
          >
            <div className="HC3--content">
              <h1 style={{ whiteSpace: 'nowrap' }}>{props.title}</h1>
              <h3 style={{ color: '#131313', whiteSpace: 'nowrap' }}>
                {props.description}
              </h3>
              <a
                onClick={() => isPressed((pressed) => !pressed)}
                style={{
                  transform: 'translate(-10rem,0)',
                  backgroundColor: `${props.cta[0].bg_color}`,
                  color: `${props.cta[0].text_color}`,
                }}
                className="HC3--btn"
              >
                {props.cta[0].text}
              </a>
            </div>
          </div>
        </div>
      )}
    </>

    // <>
    // <div
    //   id="HC3"
    //   ref={divRef}
    //   style={{
    //     backgroundColor: `${props.bg_color}`,
    //     backgroundImage: `url(${props.bg_image.image_url})`,
    //   }}
    //   className="HC3"
    // >
    //   <div className="HC3--content">
    //     <h1>{props.title}</h1>
    //     <h3 style={{ color: '#131313' }}>{props.description}</h3>
    //     <a
    //       // href={props.cta[0].url}
    //       onClick={() => isPressed((pressed) => !pressed)}
    //       style={{
    //         backgroundColor: `${props.cta[0].bg_color}`,
    //         color: `${props.cta[0].text_color}`,
    //       }}
    //       className="HC3--btn"
    //     >
    //       {props.cta[0].text}
    //     </a>
    //   </div>
    // </div>
    // </>
  );
}

export default function HC3() {
  return <div>{HC3Data.map(HC3Component)}</div>;
}