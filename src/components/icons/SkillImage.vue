<script setup lang="ts">
defineProps<{ tech: any }>();
</script>
<template>
  <div class="tooltip-container">
    <div class="tooltip">
      <div class="profile">
        <div class="user">
          <div class="img">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M7.90451 6.92144C8.41341 6.45495 8.44779 5.66424 7.9813 5.15534C7.51481 4.64645 6.7241 4.61207 6.2152 5.07856L7.90451 6.92144ZM1.46194 11.1314L2.3066 12.0529L2.3066 12.0529L1.46194 11.1314ZM1.46194 11.8686L2.3066 10.9471L2.3066 10.9471L1.46194 11.8686ZM6.2152 17.9214C6.7241 18.3879 7.51481 18.3536 7.9813 17.8447C8.44779 17.3358 8.41341 16.545 7.90451 16.0786L6.2152 17.9214ZM6.2152 5.07856L0.617287 10.21L2.3066 12.0529L7.90451 6.92144L6.2152 5.07856ZM0.617287 12.79L6.2152 17.9214L7.90451 16.0786L2.3066 10.9471L0.617287 12.79ZM0.617287 10.21C-0.139356 10.9036 -0.139356 12.0964 0.617287 12.79L2.3066 10.9471C2.63087 11.2444 2.63087 11.7556 2.3066 12.0529L0.617287 10.21Z"
                  fill="#000000"
                ></path>
                <path
                  d="M16.0557 16.0786C15.5468 16.545 15.5125 17.3358 15.9789 17.8447C16.4454 18.3536 17.2361 18.3879 17.745 17.9214L16.0557 16.0786ZM22.4983 11.8686L21.6537 10.9471L21.6537 10.9471L22.4983 11.8686ZM22.4983 11.1314L21.6537 12.0529L21.6537 12.0529L22.4983 11.1314ZM17.745 5.07856C17.2361 4.61207 16.4454 4.64645 15.979 5.15534C15.5125 5.66424 15.5468 6.45495 16.0557 6.92144L17.745 5.07856ZM17.745 17.9214L23.343 12.79L21.6537 10.9471L16.0557 16.0786L17.745 17.9214ZM23.343 10.21L17.745 5.07856L16.0557 6.92144L21.6537 12.0529L23.343 10.21ZM23.343 12.79C24.0996 12.0964 24.0996 10.9036 23.343 10.21L21.6537 12.0529C21.3294 11.7556 21.3294 11.2444 21.6537 10.9471L23.343 12.79Z"
                  fill="#000000"
                ></path>
                <path
                  d="M15.2127 3.80317C15.3801 3.13343 14.9729 2.45476 14.3032 2.28732C13.6334 2.11989 12.9548 2.52709 12.7873 3.19683L15.2127 3.80317ZM8.78732 19.1968C8.61989 19.8666 9.02709 20.5452 9.69683 20.7127C10.3666 20.8801 11.0452 20.4729 11.2127 19.8032L8.78732 19.1968ZM12.7873 3.19683L8.78732 19.1968L11.2127 19.8032L15.2127 3.80317L12.7873 3.19683Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </div>
          <div class="details">
            <div class="name">Linguagem de Marcação de Hipertexto</div>
          </div>
        </div>
      </div>
    </div>
    <div class="text">
      <a class="icon" href="#">
        <div class="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="instagramSVG">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path>
                <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path>
                <path
                  d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                  fill="white"
                ></path>
              </g>
            </svg>
          </span>
        </div>
        <div class="text">{{ tech.name }}</div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="css">
.tooltip-container {
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 17px;
  border-radius: 10px;
}

.tooltip {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  border-radius: 15px;
  box-shadow:
    inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3),
    -5px -5px 15px rgba(255, 255, 255, 0.1);
}

.profile {
  background: #2a2b2f;
  border-radius: 10px 15px;
  padding: 10px;
  border: 1px solid #52382f;
}

.tooltip-container:hover .tooltip {
  top: -150px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.icon {
  text-decoration: none;
  color: #fff;
  display: block;
  position: relative;
}
.layer {
  width: 55px;
  height: 55px;
  transition: transform 0.3s;
}
.icon:hover .layer {
  transform: rotate(-35deg) skew(20deg);
}
.layer span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 15px;
  transition: all 0.3s;
}

.layer span,
.text {
  color: #f16529;
  border-color: #f16529;
}

.icon:hover.layer span {
  box-shadow: -1px 1px 3px #f16529;
}
.icon .text {
  position: absolute;
  left: 50%;
  bottom: -5px;
  opacity: 0;
  font-weight: 500;
  transform: translateX(-50%);
  transition:
    bottom 0.3s ease,
    opacity 0.3s ease;
}
.icon:hover .text {
  bottom: -35px;
  opacity: 1;
}

.icon:hover .layer span:nth-child(1) {
  opacity: 0.2;
}
.icon:hover .layer span:nth-child(2) {
  opacity: 0.4;
  transform: translate(5px, -5px);
}
.icon:hover .layer span:nth-child(3) {
  opacity: 0.6;
  transform: translate(10px, -10px);
}
.icon:hover .layer span:nth-child(4) {
  opacity: 0.8;
  transform: translate(15px, -15px);
}
.icon:hover .layer span:nth-child(5) {
  opacity: 1;
  transform: translate(20px, -20px);
}

.instagramSVG {
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: -webkit-linear-gradient(
    45deg,
    #f16529 0%,
    #e44d26 25%,
    #e44d26 50%,
    #e44d26 75%,
    #e44d26 100%
  );
  background: linear-gradient(
    45deg,
    #f16529 0%,
    #e44d26 25%,
    #e44d26 50%,
    #e44d26 75%,
    #e44d26 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#F16529', endColorstr='#E44D26',GradientType=1 );
}
.user {
  display: flex;
  gap: 10px;
}
.img {
  width: 50px;
  height: 50px;
  font-size: 25px;
  font-weight: 700;
  border: 1px solid #f16529;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}
.name {
  font-size: 17px;
  font-weight: 700;
  color: #f16529;
}
.details {
  display: flex;
  flex-direction: column;
  gap: 0;
  color: #fff;
}
.about {
  color: #ccc;
  padding-top: 5px;
}
</style>
