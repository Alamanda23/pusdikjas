let preveiwContainer = document.querySelector(".pendidikan-preview");
let previewBox = preveiwContainer.querySelectorAll(".preview");

document
  .querySelectorAll(".pendidikan-container .pendidikan")
  .forEach((pendidikan) => {
    pendidikan.onclick = () => {
      preveiwContainer.style.display = "flex";
      let name = pendidikan.getAttribute("data-name");
      previewBox.forEach((preview) => {
        let target = preview.getAttribute("data-target");
        if (name == target) {
          preview.classList.add("active");
        }
      });
    };
  });

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});

$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".nav").toggleClass("nav-toggle");
  });

  $(window).on("load scroll", function () {
    $(".fa-bars").removeClass("fa-times");
    $(".nav").removeClass("nav-toggle");

    if ($(window).scrollTop() > 10) {
      $("header").addClass("header-active");
    } else {
      $("header").removeClass("header-active");
    }
  });

  $(".galeri").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
// let faqBox = document.querySelectorAll(".faq .box-container .box");

// faqBox.forEach((box) => {
//   box.onclick = () => {
//     let content = box.querySelector(".content");
//     let icon = box.querySelector("i");

//     if (content.classList.contains("active")) {
//       content.classList.remove(active);
//     } else {
//       document
//         .querySelectorAll(".faq .box-container .box .content")
//         .forEach((contents) => {
//           contents.classList.remove("active");
//         });
//       content.classList.add(active);
//     }

//     if (icon.classList.contains("fa-minus")) {
//       icon.classList.replace("fa-minus", "fa-plus");
//     } else {
//       document
//         .querySelectorAll(".faq .box-container .box .fa-minus")
//         .forEach((icons) => {
//           icons.classList.replace("fa-minus", "fa-plus");
//         });
//       icon.classList.replace("fa-plus", "fa-minus");
//     }
//   };
// });
