import * as multer from 'multer';

const pathToStorage = (fieldname: string) => {
  if (fieldname === 'track') {
      return './uploads/track';
  } else if (fieldname === 'img') {
       return './uploads/img';
  }

  return './uploads';
};

const storage = multer.diskStorage({
  destination: (req, file, next) => {
      next(null, pathToStorage(file.fieldname));
  },
  filename: (req, file, next) => {
      next(null, `${Date.now()}${file.originalname}`);
  },
});

const fileFilter = (req, file, next) => {
  if (file.mimetype.includes('audio/') || file.mimetype.includes('image/')) {
      next(null, true);
  } else {
      next(null, false);
  }
};


export const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter,
});
