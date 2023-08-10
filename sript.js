
// cas = variable pour verifier s'il sagit d'un ajout ou d'une modification

let cas = 0;
var ajouter = document.getElementById('ajouter');
var formulaire = document.getElementById('formulaires');
var annuler = document.getElementById('annuler');
var annuler2 = document.getElementById('annuler2');
var ajouter_et_continuer = document.getElementById('ajouter_et_continuer')
var valider = document.getElementById('valider');
const supprimer = document.getElementById('supprimer');


ajouter.addEventListener('click', openFormulaire);
annuler.addEventListener('click', closeformulaire);
annuler2.addEventListener('click', closeformulaire);


function openFormulaire() {
    cas = 0;
    ajouter_et_continuer.style.display = 'block';
    formulaire.style.display = 'block';

}

function closeformulaire() {
    formulaire.style.display = 'none'
}






let myarray1 = JSON.parse(localStorage.getItem("etudiant"));

function affichage() {
    let table = document.getElementById('content');
    table.innerHTML = '';
    let contentTable = ''
    let i = 1

    console.log()

    myarray1.forEach(function (etudiant) {
        contentTable = contentTable + '<tr>\
    <td> '+ i.toString() + ' </td>\
    <td> '+ etudiant["id"] + ' </td>\
    <td> '+ etudiant["nom"] + ' </td>\
    <td> '+ etudiant["prenom"] + ' </td>\
    <td> '+ etudiant["Niveau"] + ' </td>\
    <td> '+ etudiant["spacialite"] + ' </td>\
    <td> '+ etudiant["departement"] + ' </td>\
    <td class="action"> <button  type="button" class="editer" onclick="editeRow('+ etudiant["id"] + ')"  >Editer</button>   <button id="supprimer" type="button" class="supprimer" onclick="removeRow(' + etudiant["id"] + ')" >supprimer</button>  </td>\
    </tr > '
        i++;
    });



    table.innerHTML = contentTable;

}





valider.addEventListener('click', () => {


    if (cas == 0) {
        let etudiant = {

        }
        etudiant['nom'] = document.getElementById('nom').value;
        etudiant['prenom'] = document.getElementById('prenom').value;
        etudiant['Niveau'] = document.getElementById('niveau').value;
        etudiant['spacialite'] = document.getElementById('specialite').value;
        etudiant['departement'] = document.getElementById('departement').value;
        etudiant['id'] = myarray1[myarray1.length - 1]['id'] + 1;
        myarray1.push(etudiant);
        formulaire.style.display = 'none';
    } else {

        // recherche de l'etudiant dans le tableau
        myarray1.forEach(function (etudiant) {

            // verification de l'id de l'etudiant
            if (etudiant['id'].toString() === cas.toString()) {

                etudiant['nom'] = document.getElementById('nom').value;
                etudiant['prenom'] = document.getElementById('prenom').value;
                etudiant['Niveau'] = document.getElementById('niveau').value;
                etudiant['spacialite'] = document.getElementById('specialite').value;
                etudiant['departement'] = document.getElementById('departement').value;
                etudiant['id'] = cas;
                let index = myarray1.indexOf(etudiant)
                myarray1[index] = etudiant;
                formulaire.style.display = 'none';
                return;
            }


        });


    }
    affichage();

});






ajouter_et_continuer.addEventListener('click', () => {
    let etudiant = {

    }
    etudiant['nom'] = document.getElementById('nom').value;
    etudiant['prenom'] = document.getElementById('prenom').value;
    etudiant['Niveau'] = document.getElementById('niveau').value;
    etudiant['spacialite'] = document.getElementById('specialite').value;
    etudiant['departement'] = document.getElementById('departement').value;
    etudiant['id'] = myarray1[myarray1.length - 1]['id'] + 1;
    myarray1.push(etudiant);

    affichage();

});




function removeRow(id) {
    // recherche de l'etudiant dans le tableau
    myarray1.forEach(function (etudiant) {

        // verification de l'id de l'etudiant
        if (etudiant['id'].toString() === id.toString()) {

            // supression de l'etudiant sur la ligne du tableau
            let index = myarray1.indexOf(etudiant)
            myarray1.splice(index, 1)
        }


    });
    affichage();


}





function editeRow(id) {

    myarray1.forEach(function (etudiant) {
        if (etudiant['id'].toString() === id.toString()) {
            let noel = myarray1.indexOf(etudiant)
            formulaire.style.display = 'block';
            ajouter_et_continuer.style.display = 'none';
            cas = id;
            document.getElementById('nom').value = etudiant['nom'];
            document.getElementById('prenom').value = etudiant['prenom'];
            document.getElementById('niveau').value = etudiant['Niveau'];
            document.getElementById('specialite').value = etudiant['spacialite'];
            document.getElementById('departement').value = etudiant['departement'];

            //    myarray1[myarray1.length - 1]['id'] = etudiant['cas'];

            affichage();
        }


    })
}






