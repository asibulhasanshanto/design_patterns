var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//defining the classes
var Device = /** @class */ (function () {
    function Device() {
    }
    Device.prototype.getBufferData = function () {
        return "";
    };
    return Device;
}());
var StreamingVideoService = /** @class */ (function () {
    function StreamingVideoService(device) {
        this.device = device;
    }
    StreamingVideoService.prototype.startStreaming = function () {
        return "";
    };
    StreamingVideoService.prototype.stopStreaming = function () {
        return "";
    };
    return StreamingVideoService;
}());
var WebCam = /** @class */ (function (_super) {
    __extends(WebCam, _super);
    function WebCam() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebCam.prototype.getBufferData = function () {
        return "buffer data to WebCam";
    };
    return WebCam;
}(Device));
var DSLRCamera = /** @class */ (function (_super) {
    __extends(DSLRCamera, _super);
    function DSLRCamera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DSLRCamera.prototype.getBufferData = function () {
        return "buffer data to DSLR Camera";
    };
    return DSLRCamera;
}(Device));
var YoutubeStreaming = /** @class */ (function (_super) {
    __extends(YoutubeStreaming, _super);
    function YoutubeStreaming() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YoutubeStreaming.prototype.startStreaming = function () {
        return "start streaming to Youtube";
    };
    YoutubeStreaming.prototype.stopStreaming = function () {
        return "stop streaming to Youtube";
    };
    return YoutubeStreaming;
}(StreamingVideoService));
var FacebookStreaming = /** @class */ (function (_super) {
    __extends(FacebookStreaming, _super);
    function FacebookStreaming() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacebookStreaming.prototype.startStreaming = function () {
        return "start streaming to Facebook";
    };
    FacebookStreaming.prototype.stopStreaming = function () {
        return "stop streaming to Facebook";
    };
    return FacebookStreaming;
}(StreamingVideoService));
//client code
function clientCode() {
    var device = new Device();
    var streammingService = new StreamingVideoService(device);
    var webcam = new WebCam();
    var dslrCamera = new DSLRCamera();
    var youtubeStreaming = new YoutubeStreaming(webcam);
    var facebookStreaming = new FacebookStreaming(dslrCamera);
    var youtubeStreaming2 = new YoutubeStreaming(dslrCamera);
    var facebookStreaming2 = new FacebookStreaming(webcam);
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
