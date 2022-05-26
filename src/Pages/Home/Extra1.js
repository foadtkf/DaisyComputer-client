import React from "react";

const Extra1 = () => {
  return (
    <div class="flex flex-col w-full lg:flex-row container">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div class="divider lg:divider-horizontal"></div>
      <div
        tabIndex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div class="collapse-content">
          <p>tabIndex="0" attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </div>
  );
};

export default Extra1;
