export const imgGenerator = (sliderNode, imgNum, imgW, imgH) => {
  for (let i = 0; i < imgNum; i++) {
    const img = document.createElement("img");
    img.src = `https://picsum.photos/${imgW}/${imgH}?random=${i + 1}`;
    img.className = "image";
    sliderNode.appendChild(img);
  }
};
