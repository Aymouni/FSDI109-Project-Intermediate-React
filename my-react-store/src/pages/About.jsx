function About() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About Us</h1>
      <div className="d-flex justify-content-center">
        <div
          className="bg-dark bg-opacity-50 rounded p-4"
          style={{ maxWidth: "700px" }}
        >
          <p
            className="text-center fs-5 text-white mb-0"
            style={{ lineHeight: "1.8" }}
          >
            At Organika, we are passionate about bringing the freshest organic
            fruits and berries straight from local farms to your table. We
            believe that healthy living starts with the right ingredients, which
            is why every product in our store is carefully selected to ensure
            the highest quality and nutrition. Our mission is simple — to make
            organic, wholesome food accessible to everyone, one order at a time.
            Whether you are fueling your morning smoothie or looking for a fresh
            and natural snack, Organika is your trusted source for a healthier,
            greener lifestyle. 🌿
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
