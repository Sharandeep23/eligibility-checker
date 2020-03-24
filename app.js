const form = document.querySelector("#sign-up");
const outputSection = document.querySelector("#form-data");

const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const age = document.querySelector("#age");
const fruit = document.querySelector("#fruit");
const checkbox = document.querySelector("#checkbox");

form.addEventListener("submit", function(e) {
  //stops the request from being sent (prevents page reload)
  e.preventDefault();
  //   Checking If form is being filled
  if (!firstName.value || !lastName.value || !age.value || !fruit.value) return;

  outputSection.classList.add("box");

  if (checkbox.checked) {
    const pre = document.createElement("pre");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    pre.innerHTML = `<strong>স্বাগতম</strong> ${firstName.value} ${lastName.value}✅`;
    p1.innerText = `আমাদের প্রতিষ্ঠানের সমৃদ্ধির জন্য তোমার মত উচ্চাভিলাষী তরুণ(${age.value} বয়স)প্রয়োজন 😎`;
    if (fruit.value === "pineapple") {
      p2.innerText = "তোমার পছন্দ অতুলনীয় 😍";
    } else {
      p2.innerText = "কিন্তু তোমার রুচি জঘন্য 😡";
    }

    pre.style.color = "green";
    outputSection.append(pre, p1, p2);
  } else {
    const pre = document.createElement("pre");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    pre.innerHTML = `<strong>ছিঃ</strong>❗ ${firstName.value} ${lastName.value}❌`;
    p1.innerHTML = `তোমার মত <strong>অপদার্থ</strong> লোকের(${age.value} বয়স) আমাদের প্রয়োজন নেই🤬`;
    if (fruit.value === "pineapple") {
      p2.innerText = "কিন্তু তোমার পছন্দ অতুলনীয় 😍";
    } else {
      p2.innerText = "তোমার রুচিও তোমার মত জঘন্য 😡";
    }

    pre.style.color = "red";
    outputSection.append(pre, p1, p2);
  }

  // Reseting the values
  firstName.value = "";
  lastName.value = "";
  age.value = "";
  fruit.value = "";
  checkbox.checked = false;
});
