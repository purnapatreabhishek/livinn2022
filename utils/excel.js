const Excel = require('exceljs');

const exportWishlist = (wishlist, url) => {
  const workbook = new Excel.Workbook();
  const worksheet = workbook.addWorksheet('wishlists');

  worksheet.columns = [
    { header: 'Index', key: 'Index', width: 10 },
    { header: 'Name', key: 'name', width: 10 },
    { header: 'Email', key: 'email', width: 10 },
    { header: 'Property', key: 'property', width: 10 },
    { header: 'City', key: 'city', width: 10 },
    { header: 'Link', key: 'link', width: 10 },
  ];

  wishlist.forEach((wish, index) => {
    wish.Index = index + 1;
    const { userId, residenceId } = wish;
    wish.name = userId?.name || '';
    wish.email = userId?.email || '';
    wish.property = `${residenceId?.name || ''}/${residenceId?.code || ''}`;
    wish.city = residenceId?.city?.cityName || '';

    wish.link = `${url}/property-detail/${
      residenceId?.city?.cityName || 'in'
    }/${residenceId?.area?.name || 'in'}?code=${residenceId?.code}`;

    worksheet.addRow(wish);
  });

  worksheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
  });

  return workbook.xlsx;
};

const exportProperty = (property, url) => {
  const workbook = new Excel.Workbook();
  const worksheet = workbook.addWorksheet('wishlists');

  worksheet.columns = [
    { header: 'Index', key: 'Index', width: 10 },
    { header: 'Name', key: 'name', width: 10 },
    { header: 'City', key: 'city', width: 10 },
    { header: 'Area', key: 'area', width: 10 },
    { header: 'Location', key: 'location', width: 10 },
    { header: 'Gender', key: 'gender', width: 10 },
    { header: 'Price', key: 'price', width: 10 },
    { header: 'Status', key: 'status', width: 10 },
    { header: 'Link', key: 'link', width: 10 },
  ];

  property.forEach((prop, index) => {
    const data = {};
    data.Index = index + 1;
    data.name = (prop?.name || '') + prop?.code || '';
    data.city = prop?.city?.cityName || '';
    data.area = prop?.area?.name || '';
    data.location = prop?.location?.name || '';
    data.gender = prop?.gender;
    data.price =
      prop?.price?.single ||
      '' + '/' + prop?.price?.double ||
      '' + '/' + prop?.price?.triple ||
      '';
    data.status = prop?.status;
    data.link = `${url}/property-details/${prop?.city?.cityName || 'in'}/${
      prop.area?.areaName || 'in'
    }?code=${prop?.code}`;

    worksheet.addRow(data);
  });

  worksheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
  });

  return workbook.xlsx;
};

const exportUser = (users) => {
  const workbook = new Excel.Workbook();
  const worksheet = workbook.addWorksheet('users');

  worksheet.columns = [
    { header: 'Index', key: 'Index', width: 10 },
    { header: 'Name', key: 'name', width: 10 },
    { header: 'Email', key: 'email', width: 10 },
    { header: 'Phone No', key: 'phoneNo', width: 25 },
    { header: 'Gender', key: 'gender', width: 10 },
    { header: 'City', key: 'city', width: 10 },
    { header: 'College', key: 'college', width: 10 },
  ];

  users.forEach((user, idx) => {
    const data = { ...user };
    data.Index = idx + 1;
    data.phoneNo = +user?.phoneNo || '';
    data.city = user?.city?.cityName || '';
    worksheet.addRow(data);
  });

  worksheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
  });

  return workbook.xlsx;
};

const exportCallback = (requests) => {
  const workbook = new Excel.Workbook();
  const worksheet = workbook.addWorksheet('users');

  worksheet.columns = [
    { header: 'Index', key: 'Index', width: 10 },
    { header: 'First Name', key: 'firstName', width: 10 },
    { header: 'Last Name', key: 'lastName', width: 10 },
    { header: 'Email', key: 'email', width: 10 },
    { header: 'Phone No', key: 'phoneNo', width: 25 },
    { header: 'Whatsapp update', key: 'whatsappUpdate', width: 10 },
    { header: 'Area', key: 'area', width: 10 },
    { header: 'URL', key: 'url', width: 10 },
  ];

  requests.forEach((req, idx) => {
    req.Index = idx + 1;
    worksheet.addRow(req);
  });

  worksheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
  });

  return workbook.xlsx;
};

module.exports = {
  exportWishlist,
  exportProperty,
  exportUser,
  exportCallback,
};
