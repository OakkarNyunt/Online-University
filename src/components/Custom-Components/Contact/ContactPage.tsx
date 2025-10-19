import { Separator } from "@/components/ui/separator";
import Map from "./Map";
import "@/components/Custom-Components/Contact/FixZindexMap.css";

const ContactPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container mx-auto p-4 lg:p-0 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Map />
          </div>
          <div className="space-y-4 border p-4 rounded-3xl">
            <p className="text-center text-3xl font-semibold p-4">
              Online University
            </p>
            <Separator />

            <div className="flex justify-evenly mt-12 font-semibold">
              <div className="space-y-4">
                <p>FaceBook: </p>
                <p>Mail: </p>
                <p>Viber: </p>
                <p>Tiktok: </p>
                <p>Telegram: </p>
              </div>

              <div className="space-y-4">
                <p>Online University</p>
                <p>onlineuniversity.servie@gmail.com</p>
                <p>+959265448751</p>
                <p>@onlineUniversityOfficial</p>
                <p>@OnlineUniversity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
