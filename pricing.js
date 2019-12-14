document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        document.getElementById('Anuallybasic').style.display='none';
        document.getElementById('Anuallypro').style.display='none';
        document.getElementById('AnuallyMaster').style.display='none';
        document.getElementById('Monthlypro').style.display='block';
        document.getElementById('MonthlyMaster').style.display='block';
        document.getElementById('Monthlybasic').style.display='block';
        
      } 
      
      else {
        document.getElementById('Monthlypro').style.display='none';
        document.getElementById('MonthlyMaster').style.display='none';
        document.getElementById('Monthlybasic').style.display='none';
        
        document.getElementById('Anuallybasic').style.display='block';
        document.getElementById('Anuallypro').style.display='block';
        document.getElementById('AnuallyMaster').style.display='block';
      }
    });
  });
