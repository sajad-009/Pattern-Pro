const card = document.getElementById("card");
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top; // اصلاح این خط
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      });

      function calculatePattern() {
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        const num3 = parseFloat(document.getElementById("num3").value);
        const num4 = parseFloat(document.getElementById("num4").value);
        const position = parseInt(document.getElementById("position").value);

        const numbers = [num1, num2, num3].filter((num) => !isNaN(num));

        let result;
        if (numbers.length < 2) {
          result = "لطفا حداقل دو عدد ورودی بدهید.";
        } else {
          let difference = numbers[1] - numbers[0];
          let isArithmetic = true;

          for (let i = 1; i < numbers.length - 1; i++) {
            if (numbers[i + 1] - numbers[i] !== difference) {
              isArithmetic = false;
              break;
            }
          }

          if (isArithmetic) {
            const nthTerm = position
              ? numbers[0] + (position - 1) * difference
              : null;
            result = `الگو حسابی: 
             فاصله : ${difference}
             عدد ${position} ام: ${nthTerm}`;
          } else {
            result = "الگوی غیرحسابی یا نامشخص است.";
          }
        }

        document.getElementById("result").innerText = result;
        document.getElementById("resultModal").style.display = "flex";
      }

      function closeModal() {
        document.getElementById("resultModal").style.display = "none";
      }
