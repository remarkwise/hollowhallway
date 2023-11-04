const Connect = () => {
  return (
    <div className="overlay" onClick={showConnect}>
      <div className="overlay-modal">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdm2o7--82MxMzsa9kyZdbnLSGytll-8YU6xHxqJ0zE93qf8A/viewform?embedded=true"
          width="640"
          height="648"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};
export default Connect;
