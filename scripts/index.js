function calculator() {
  const calculatorElement = querySelector('.calculator');
  calculatorElement.innerHTML = `
    <input placeholder="00" class="display-screen">
      <div class="number-pannel">
        <button class="buttons" onclick="
          performOperation('1');  
        ">
          1
        </button>
        <button class="buttons" onclick="
          performOperation('2');
        ">
          2
        </button>
        <button class="buttons" onclick="
          performOperation('3');
        ">
          3
        </button>
        <button class="buttons operations" onclick="
          performOperation(' + ');
        ">
          +
        </button>
        <button class="buttons" onclick="
          performOperation('4');
        ">
          4
        </button>
        <button class="buttons" onclick="
          performOperation('5');
        ">
          5
        </button>
        <button class="buttons" onclick="
          performOperation('6');
        ">
          6
        </button>
        <button class="buttons operations" onclick="
          performOperation(' - ');
        ">
          -
        </button>
        <button class="buttons" onclick="
          performOperation('7');
        ">
          7
        </button>
        <button class="buttons" onclick="
          performOperation('8');
        ">
          8
        </button>
        <button class="buttons" onclick="
          performOperation('9');
        ">
          9
        </button>
        <button class="buttons operations" onclick="
          performOperation(' * ');
        ">
          *
        </button>
        <button class="buttons clear" onclick="
          calculation = '';
          showCalculation();
          localStorage.setItem('calculation', calculation);
        ">
          X
        </button>
        <button class="buttons" onclick="
          performOperation('0');
        ">
          0
        </button>
        <button class="buttons equals" onclick="
          calculation = eval(calculation);
          showCalculation();
          localStorage.setItem('calculation', calculation);
        ">
          =
        </button>
        <button class="buttons operations" onclick="
          performOperation(' / ');
        ">
          /
        </button>
      </div>
  `;
}