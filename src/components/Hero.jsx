function Hero(props) {
  return (
    <>
      <div className="w-full">
        <p>
          Hello welcome to our app can you please kindly provide your name? We
          promise its not for malicious purpose 😊
        </p>
        <p>Welcome {props.name}!</p>
      </div>
    </>
  );
}

export default Hero;
