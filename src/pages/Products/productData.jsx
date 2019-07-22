import OnePlus7Pro from "./productImgs/phones/OnePlus-7-Pro.jpg";
import SumsungG10Plus from "./productImgs/phones/Samsung-Galaxy-S10-Plus.jpg";

export const phonesData = {
  title: "Phones",
  id: 1,
  items: [
    {
      id: 1,
      name: "OnePlus 7 PRO",
      price: 77000,
      imgUrl: OnePlus7Pro,
      description: [
        "OS: OxygenOS",
        "Chipset: Qualcomm SDM855 Snapdragon 855",
        "Display: 6.41 inches",
        "RAM: 6 GB",
        "ROM: 128 GB",
        "Camera: Dual (48 MP + 5 MP) rear & 16 MP selfie",
        "Battery: 3700 mAh"
      ]
    },
    {
      id: 2,
      name: "Samsung Galaxy S10 Plus",
      price: 92000,
      imgUrl: SumsungG10Plus,
      description: [
        "OS: Android 9.0 (Pie); One UI",
        "Chipset: Exynos 9820",
        "Display: 6.4 inches AMOLED",
        "Rear Camera: 12 MP Wide (f/1.5) + 12 MP Telephoto (f/2.4) + 16 MP Ultrawide (f/'2.2) Triple Camera",
        "Front Camera: 10 MP (f/1.9) + 8 MP (f/2.2) Dual Camera",
        "RAM:8 GB",
        "ROM: 128 GB",
        "Battery: 4100 mAh"
      ]
    }
  ]
};
