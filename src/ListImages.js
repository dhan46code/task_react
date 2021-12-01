import React from 'react';

function ListImages({ picture }) {
  return (
    <>
      <div className='gallery-center'>
        {picture.map((images) => {
          const { id, img } = images;
          return (
            <a href={img}>
              <article className='gallery' key={id}>
                <img src={img} alt='' />
              </article>
            </a>
          );
        })}
      </div>
    </>
  );
}

export default ListImages;
