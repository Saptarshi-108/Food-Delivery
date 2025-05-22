import React, { useState } from "react";
import "./Options.css";

const Options = () => {
  const [currentSet, setCurrentSet] = useState(1);

  const scrollLeft = () => {
    if (currentSet === 2) {
      document.getElementById("grid-set-2").classList.add("hidden");
      document.getElementById("grid-set-1").classList.remove("hidden");
      setCurrentSet(1);
    }
  };

  const scrollRight = () => {
    if (currentSet === 1) {
      document.getElementById("grid-set-1").classList.add("hidden");
      document.getElementById("grid-set-2").classList.remove("hidden");
      setCurrentSet(2);
    }
  };
  return (
    <div>
      <div className="options-layout">
        <button className="scroll-button left" onClick={scrollLeft}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div className="food-dishes">
          <div className="grid-set" id="grid-set-1">
            <a href="/category/biryani" className="food-category-link">
              <div className="food-category Biryani">
                <img
                  src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01-750x750.jpg"
                  alt="Biryani"
                />
                <div className="food-category-title">Biryani</div>
              </div>
            </a>
            <a href="/category/chinese" className="food-category-link">
              <div className="food-category Chinese">
                <img
                  src="https://media.istockphoto.com/id/483120255/photo/asian-oranage-chicken-with-green-onions.jpg?s=612x612&w=0&k=20&c=0T_g_J5OSnmCei1Slgr1128wzAhzceRvLjd94R3gkgs="
                  alt="Chinese"
                />
                <div className="food-category-title">Chinese</div>
              </div>
            </a>
            <a href="/category/pizza" className="food-category-link">
              <div className="food-category Pizza">
                <img
                  src="https://st3.idealista.it/news/archivie/styles/fullwidth_xl/public/2022-10/media/image/aurelien-lemasson-theobald-x00czbt4dfk-unsplash.jpg?VersionId=V5HNX7jAzvpmOwawvIKLGNATTI3v_m09&itok=KeH-F7_2"
                  alt="Pizza"
                />
                <div className="food-category-title">Pizza</div>
              </div>
            </a>
            <a href="/category/north-indian" className="food-category-link">
              <div className="food-category North-Indian">
                <img
                  src="https://www.thespruceeats.com/thmb/hqqNrNhIpqPqV2u0T0K-IUzUsEo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-cuisine-of-north-india-1957883-d32a933f506d43f59ac38a8eb956884a.jpg"
                  alt="North Indian"
                />
                <div className="food-category-title">North Indian</div>
              </div>
            </a>
            <a href="/category/cake" className="food-category-link">
              <div className="food-category Cake">
                <img
                  src="https://media.istockphoto.com/id/1187830875/photo/confectioner-decorating-chocolate-cake-close-up.jpg?s=612x612&w=0&k=20&c=sAUop7R4pohc-Pghb3CqVJnFE44p2phGi47z7pjK4Lc="
                  alt="Cake"
                />
                <div className="food-category-title">Cake</div>
              </div>
            </a>
            <a href="/category/momo" className="food-category-link">
              <div className="food-category Momo">
                <img
                  src="https://media.istockphoto.com/id/1133151212/photo/japanese-dumplings-gyoza-with-pork-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=vC6GTUDGK6dD5_QHvY1V7fVUdPx-z4TG73DUACR_L5s="
                  alt="Momo"
                />
                <div className="food-category-title">Momo</div>
              </div>
            </a>
            <a href="/category/burger" className="food-category-link">
              <div className="food-category Burger">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4uJum9ibTcbE3DRu77aLLuqGFBTdxvPCFQ&s"
                  alt="Burger"
                />
                <div className="food-category-title">Burger</div>
              </div>
            </a>
            <a href="/category/ice-cream" className="food-category-link">
              <div className="food-category Ice-Cream">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsO76hL4tNLp6ZN_j2m-CyGSpXmf88nzO0Q&s"
                  alt="Ice Cream"
                />
                <div className="food-category-title">Ice Cream</div>
              </div>
            </a>
          </div>
          <div className="grid-set hidden" id="grid-set-2">
            <a href="/category/south-indian" className="food-category-link">
              <div className="food-category South-Indian">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqbgDCkCke3NQ4z1x3hzG5EVXiFS5FBxCIg&s"
                  alt="South Indian"
                />
                <div className="food-category-title">South Indian</div>
              </div>
            </a>
            <a href="/category/pure-veg" className="food-category-link">
              <div className="food-category Pure-Veg">
                <img
                  src="https://content.jdmagicbox.com/comp/def_content/pure_veg_restaurants/default-pure-veg-restaurants-5.jpg"
                  alt="Pure Veg"
                />
                <div className="food-category-title">Pure Veg</div>
              </div>
            </a>
            <a href="/category/rolls" className="food-category-link">
              <div className="food-category Rolls">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4czqjheaYurDAxSuu689Zk03vH5o8-fCug&s"
                  alt="Rolls"
                />
                <div className="food-category-title">Rolls</div>
              </div>
            </a>
            <a href="/category/kebab" className="food-category-link">
              <div className="food-category Kebab">
                <img
                  src="https://cookingorgeous.com/wp-content/uploads/2021/06/lamb-shish-kebab-20.jpg"
                  alt="Kebab"
                />
                <div className="food-category-title">Kebab</div>
              </div>
            </a>
            <a href="/category/shawarma" className="food-category-link">
              <div className="food-category Shawarma">
                <img
                  src="https://www.simplyquinoa.com/wp-content/uploads/2023/05/chicken-shawarma-gyros-9.jpg"
                  alt="Shawarma"
                />
                <div className="food-category-title">Shawarma</div>
              </div>
            </a>
            <a href="/category/dosa" className="food-category-link">
              <div className="food-category Dosa">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9tXNH_xCEYOU9wjkNFLKfCHUf1mvc8QmR4g&s"
                  alt="Dosa"
                />
                <div className="food-category-title">Dosa</div>
              </div>
            </a>
            <a href="/category/salad" className="food-category-link">
              <div className="food-category Salad">
                <img
                  src="https://media.istockphoto.com/id/1454741285/photo/roast-fish-and-vegetable-salad-on-wooden-background.jpg?s=612x612&w=0&k=20&c=Slmk-RLvdR3317E5W2UKLul4y1ZH3axjL2XCNOBZbhE="
                  alt="Salad"
                />
                <div className="food-category-title">Salad</div>
              </div>
            </a>
            <a href="/category/desserts" className="food-category-link">
              <div className="food-category Desserts">
                <img
                  src="https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts.jpg"
                  alt="Desserts"
                />
                <div className="food-category-title">Desserts</div>
              </div>
            </a>
          </div>
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Options;
