# Duty Doctor Server

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/arjun897babu/duty-doctor---geekstack.git
   ```

2. **Environment Configuration**

   Create a `.env` file in root directory 

   ```env
   PORT=4000
   ORIGIN=http://localhost:{your front end port}
   JWT_ACCESS_SECRET=secret_jwt
   JWT_REFRESH_SECRET=secret_jwt
   JWT_ACCESS_EXPIRE=15m
   JWT_REFRESH_EXPIRE=7d
   NODE_ENV=development
   GOOGLE_EMAIL=your_email_address
   GOOGLE_SERVICE=gmail
   GOOGLE_HOST=smtp.gmail.com
   GOOGLE_PASSWORD=your_google_app_password
   MONGO_URI=your_mongo_atlas_URi
   ```


   ```

3. **Setup Frontend**
   ```bash
   npm install

   npm run dev
   ```

4. Setup Backend
To set up the front end, please visit the [duty doctor front end respostiory ](https://github.com/arjun897babu/duty-doctor-front-end-geek-stack-) and follow the instructions there.



##  Contributing


1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

##