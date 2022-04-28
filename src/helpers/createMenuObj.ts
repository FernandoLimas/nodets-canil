type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObj = (activeMenu: MenuOptions) => {
  let menu = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };

  if(activeMenu !== '') {
    menu[activeMenu] = true;
  }

  return menu;
}

