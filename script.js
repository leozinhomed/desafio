
        function fibonacciSequence(n) {
            const sequence = [0, 1];
            while (sequence[sequence.length - 1] < n) {
                const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
                sequence.push(nextValue);
            }
            return sequence;
        }

        function isFibonacciNumber(number) {
            const sequence = fibonacciSequence(number);
            if (sequence.includes(number)) {
                return `O número ${number} pertence à sequência de Fibonacci.`;
            } else {
                return `O número ${number} não pertence à sequência de Fibonacci.`;
            }
        }

        function checkFibonacci() {
            const number = document.getElementById('number').value;
            const resultText = isFibonacciNumber(parseInt(number));
            document.getElementById('result').innerText = resultText;
        }

        function countLetterA(str) {
            let count = 0;
            for (let char of str) {
                if (char.toLowerCase() === 'a') {
                    count++;
                }
            }
            return count;
        }

        function checkString() {
            const inputString = document.getElementById('stringInput').value;
            const count = countLetterA(inputString);
            const resultText = `A letra 'a' aparece ${count} vez(es) na string.`;
            document.getElementById('stringResult').innerText = resultText;
        }

        function calculateSoma() {
            let INDICE = 12, SOMA = 0, K = 1;
            while (K <= INDICE) { // Corrigido aqui
                SOMA = SOMA + K;
                K = K + 1;
            }
            document.getElementById('somaResult').innerText = `O valor da variável SOMA é ${SOMA}.`;
        }

        document.getElementById('answer-a').textContent = '9'; // Sequência de números ímpares
        document.getElementById('answer-b').textContent = '128'; // Sequência de potências de 2
        document.getElementById('answer-c').textContent = '49'; // Sequência de quadrados perfeitos
        document.getElementById('answer-d').textContent = '100'; // Sequência de quadrados perfeitos começando em 2^2
        document.getElementById('answer-e').textContent = '13'; // Sequência de Fibonacci
        document.getElementById('answer-f').textContent = '20'; // Sequência de números começando em 2 e números que não contêm o dígito 1

        function showSolution() {
          document.getElementById('solution').style.display = 'block';
      }
      
    