function getTypeTicket(type) {
    switch(type) {
      case 'new':
        return 'Нове';
      case 'change':
        return 'Перехід';
      default:
        return type;
    }
  }

export default getTypeTicket