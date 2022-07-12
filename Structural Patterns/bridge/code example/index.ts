//defining the classes
class Device {
  getBufferData(): string {
    return "";
  }
}

class StreamingVideoService {
  private device: Device;
  constructor(device: Device) {
    this.device = device;
  }
  startStreaming(): string {
    return "";
  }
  stopStreaming(): string {
    return "";
  }
}

class WebCam extends Device {
  getBufferData(): string {
    return "buffer data to WebCam";
  }
}
class DSLRCamera extends Device {
  getBufferData(): string {
    return "buffer data to DSLR Camera";
  }
}
class YoutubeStreaming extends StreamingVideoService {
  startStreaming(): string {
    return "start streaming to Youtube";
  }
  stopStreaming(): string {
    return "stop streaming to Youtube";
  }
}

class FacebookStreaming extends StreamingVideoService {
  startStreaming(): string {
    return "start streaming to Facebook";
  }
  stopStreaming(): string {
    return "stop streaming to Facebook";
  }
}

//client code
function clientCode() {
  let device = new Device();
  let streammingService = new StreamingVideoService(device);
  let webcam = new WebCam();
  let dslrCamera = new DSLRCamera();
  let youtubeStreaming = new YoutubeStreaming(webcam);
  let facebookStreaming = new FacebookStreaming(dslrCamera);
  let youtubeStreaming2 = new YoutubeStreaming(dslrCamera);
  let facebookStreaming2 = new FacebookStreaming(webcam);

  console.log(youtubeStreaming.startStreaming());
  console.log(youtubeStreaming.stopStreaming());
  console.log(facebookStreaming.startStreaming());
  console.log(facebookStreaming.stopStreaming());
  console.log(youtubeStreaming2.startStreaming());
  console.log(youtubeStreaming2.stopStreaming());
  console.log(facebookStreaming2.startStreaming());
  console.log(facebookStreaming2.stopStreaming());
}
clientCode();
