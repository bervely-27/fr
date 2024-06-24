
        function calculate() {
            // Récupération des valeurs saisies par l'utilisateur
            var nombre_1 = parseFloat(document.getElementById('nombre_1').value);
            var nombre_2 = parseFloat(document.getElementById('nombre_2').value);
            var operation = document.getElementById('operation').value;
            var resultElement = document.getElementById('result');
            var result;

            // Vérification si les nombres sont valides
            if (isNaN(nombre_1) || isNaN(nombre_2)) {
                resultElement.textContent = 'Veuillez entrer des nombres valides';
                return;
            }

            // Calcul en fonction de l'opération choisie
            switch(operation) {
                case 'addition':
                    result = nombre_1 + nombre_2;
                    break;
                case 'soustraction':
                    result = nombre_1 - nombre_2;
                    break;
                case 'multiplication':
                    result = nombre_1 * nombre_2;
                    break;
                case 'division':
                    if (nombre_2 === 0) {
                        resultElement.textContent = 'Division par zéro impossible';
                        return;
                    }
                    result = nombre_1 / nombre_2;
                    break;
                default:
                    resultElement.textContent = 'Sélectionnez une opération valide';
                    return;
            }

            // Affichage du résultat
            resultElement.textContent = 'Résultat : ' + result;
        }