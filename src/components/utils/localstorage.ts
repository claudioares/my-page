

export function setLocalStorage (value:string, image:string, date:string) {
    localStorage.setItem('id', value);
    localStorage.setItem('image', image);
    localStorage.setItem('date', date);
};


export function getLocalStorage (key:string) {
    let myItem = localStorage.getItem(key);
    return myItem;
};

export function removeLocalStorage () {
    localStorage.removeItem('id');
    localStorage.removeItem('image');
    localStorage.removeItem('date');
}