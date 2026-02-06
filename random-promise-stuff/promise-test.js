function promiseFunction(){
    const myPromise = new Promise((resolve, reject) => {
        //some async operation
        setTimeout(() => {
            const someRandomNum = Math.floor(Math.random() * 101);
            if(someRandomNum > 50)
            {
                console.log('This file is biiig: ', someRandomNum);
                resolve('This is bigger than 50');
            }
            else
            {
                console.log('This file is teeeeeeny: ', someRandomNum);
                reject('Teeny weeny');
            }
        }, 2000);
    }
    );
    return myPromise;
}

promiseFunction().then((msg) => {console.log(msg)}).catch((msg) => {console.log(msg)});