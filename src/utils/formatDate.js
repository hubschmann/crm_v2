const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('uk-UA'); // вкажіть свій бажаний локальний код тут
  };

export default formatDate;