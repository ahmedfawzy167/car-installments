document.querySelector("#carPrice").addEventListener("keyup", calculate);
document.querySelector("#depositeValue").addEventListener("keyup", calculate);
document.querySelector("#years").addEventListener("change", calculate);

function calculate() {
  var carPrice = document.querySelector("#carPrice").value;
  var depositeValue = document.querySelector("#depositeValue").value;
  var years = document.querySelector("#years").value;
  var remainingValue = RemainingValue(carPrice, depositeValue);
  var interestValue = InterestValue(years, remainingValue);
  var totalInstallments = TotalInstallments(remainingValue, interestValue);
  var monthlyInstallment = MonthlyInstallment(totalInstallments, years);

  document.querySelector("#showPrice").innerHTML = carPrice;
  document.querySelector("#showDeposite").innerHTML = depositeValue;
  document.querySelector("#showInterest").innerHTML = interestValue;
  document.querySelector("#showTotalInstallments").innerHTML = totalInstallments;
  document.querySelector("#showMonthlyInstallment").innerHTML = monthlyInstallment;
}

function RemainingValue(cp,dv) {
  var remainingValue = cp - dv;
  return remainingValue;
}

function InterestValue(y,rv) {
  if (y == "1") {
     var interestRate = 0.11;
  } else if (y == "2") {
     var interestRate = 0.19;
  } else if (y == "3") {
     var interestRate = 0.36;
  } else if (y == "4") {
     var interestRate = 0.41;
  } else if (y == "5") {
     var interestRate = 0.49;
  }

  var iv = rv * interestRate;
  return iv;
}

function TotalInstallments(rv,iv) {
  var totalInstallments = rv + iv;
  return totalInstallments;
}

function MonthlyInstallment(ti,y) {
  var monthlyInstallment = ti / (y * 12);
  return monthlyInstallment;
}