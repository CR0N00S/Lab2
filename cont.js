let firebaseConfig = {
    apiKey: "AIzaSyDNM-ZJqgynk_zH2QtrLLoVkzGgPPUt4bY",
    authDomain: "lab-5-556e0.firebaseapp.com",
    databaseURL: "https://lab-5-556e0.firebaseio.com",
    projectId: "lab-5-556e0",
    storageBucket: "lab-5-556e0.appspot.com",
    messagingSenderId: "469316398435",
    appId: "1:469316398435:web:7eb8a12aa1c68e03e0f756",
    measurementId: "G-P2645PVF3M"
  };

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let gender = 0;
let g_male = 0;
let g_female = 0;
let g_other = 0;
$('button').on('click', () => {
  let name= $('#name').val()
  let mass = $('#mass').val()
  let e_mail = $('#e_mail').val()
  let gender = $("input[name='gender']:checked").val()


  if(name =='' || mass=='' || e_mail =='' || $("input[name='gender']:checked") ==null){
    return this.Error
  }
  console.log(name)
  console.log(mass)
  console.log(e_mail)
  console.log(gender)

  db.collection("hwtest").add({
    name: name,
    massage: mass,
    email: e_mail,
    gender: gender,
  })
})
db.collection('hwtest').onSnapshot(doc => {

  let table = $('tbody')[0]  
  $('tbody tr').remove()



  doc.forEach(item => {
    console.log(item.data())
    let row = table.insertRow(-1)
        let firstCell = row.insertCell(0)
        let secondCell = row.insertCell(1)
        let thirdCell = row.insertCell(2)
        let fourCell = row.insertCell(3)

        firstCell.textContent = item.data().name
        secondCell.textContent = item.data().massage
        thirdCell.textContent = item.data().email
        fourCell.textContent = item.data().gender

  })

 
  snapshot.forEach(doc => {
    //Counting contacts gender
    const data = doc.data();
    if (data.gender == "Male") g_male++;
    else if (data.gender == "Female") g_female++;
    else g_other++;
})


})
  
let ctx = document.getElementById('myChart').getContext('2d');

console.log(ctx)
let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Male', 'Female', 'Other',],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

myChart.data.datasets[0].data = [g_male,g_female,g_other]
myChart.update()



