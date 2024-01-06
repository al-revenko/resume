function calculateAge(birthday: Date): number {
  const substractValue = Date.now() - birthday.getTime();
  const newDate = new Date(substractValue);

  return Math.abs(newDate.getUTCFullYear() - 1970);
}

function ageToStr(age: number): string {
  
  const hundredRemainder = age % 100;

  let txt: string;

  if (hundredRemainder >= 5 && hundredRemainder <= 20) {
    txt = 'лет';
  }

  else {

    const tenRemainder = hundredRemainder % 10;

    if (tenRemainder == 1) {
      txt = 'год';
    }

    else if (tenRemainder >= 2 && tenRemainder <= 4) {
      txt = 'года';
    }

    else {
      txt = 'лет';
    }
  }
  return txt;
}

export {calculateAge, ageToStr}