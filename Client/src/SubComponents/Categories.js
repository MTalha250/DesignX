import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const Categories = () => {
  const [data, setData] = useContext(DataContext);
  const array = (category, subCategory) => {
    const filter = data
      .filter((d) => {
        if (d.category === category)
          if (d.sub_category === subCategory) return d;
      })
      .map((d) => {
        return d.type;
      });
    return [...new Set(filter)];
  };

  const categories = [
    {
      name: "Bedroom",
      img: "https://interwood.pk/media/catalog/categorymenu/Beds.jpg",
      subCategories: [
        {
          name: "BEDS",
          img: "https://interwood.pk/media/catalog/categorymenu/Beds.jpg",
          type: array("Bedroom", "BEDS"),
        },
        {
          name: "STORAGE",
          img: "https://interwood.pk/media/catalog/categorymenu/Bedroom_Storage_Tab_Thumbnail.jpg",
          type: array("Bedroom", "STORAGE"),
        },
        // {
        //   name: "DECOR",
        //   img: "https://interwood.pk/media/catalog/categorymenu/Accessories.jpg",
        //   type: array("Bedroom", "DECOR"),
        // },
        {
          name: "SEATING & CHAIRS",
          img: "https://interwood.pk/media/catalog/categorymenu/Seating_Chairs.jpg",
          type: array("Bedroom", "SEATING & CHAIRS"),
        },
      ],
    },
    {
      name: "Living",
      img: "https://interwood.pk/media/catalog/categorymenu/living-room-furniture_2.jpg",
      subCategories: [
        {
          name: "SOFAS",
          img: "https://interwood.pk/media/catalog/categorymenu/Sofas.jpg",
          type: array("Living", "SOFAS"),
        },
        {
          name: "SOFA BED",
          img: "https://interwood.pk/media/catalog/categorymenu/Sofas_Beds.jpg",

          type: array("Living", "SOFA BED"),
        },
        // {
        //   name: "RECLINERS",
        //   img: "https://interwood.pk/media/catalog/categorymenu/Recliners.jpg",

        //   type: array("Living", "RECLINERS"),
        // },
        {
          name: "CHAIRS",
          img: "https://interwood.pk/media/catalog/categorymenu/Chairs.jpg",
          type: array("Living", "CHAIRS"),
        },
        {
          name: "TABLES",
          img: "https://interwood.pk/media/catalog/categorymenu/Table.jpg",
          type: array("Living", "TABLES"),
        },
        {
          name: "STORAGE",
          img: "https://interwood.pk/media/catalog/categorymenu/Storage_KIDS_.jpg",
          type: array("Living", "STORAGE"),
        },
        // {
        //   name: "FLOORING",
        //   img: "https://interwood.pk/media/catalog/categorymenu/Flooring_1.jpg",
        //   type: array("Living", "FLOORING"),
        // },
      ],
    },
    {
      name: "Study",
      img: "https://interwood.pk/media/catalog/categorymenu/study_table_1.jpg",
      subCategories: [
        {
          name: "HOME OFFICE DESKS",
          img: "https://interwood.pk/media/catalog/categorymenu/Home_Office_Desk.jpg",
          type: array("Study", "HOME OFFICE DESKS"),
        },
      ],
    },
    {
      name: "Kids",
      img: "https://interwood.pk/media/catalog/categorymenu/kids_furniture_4.jpg",
      subCategories: [
        {
          name: "KIDS BEDS",
          img: "https://interwood.pk/media/catalog/categorymenu/Kids_Beds.jpg",
          type: array("Kids", "KIDS BEDS"),
        },
        {
          name: "STORAGE",
          img: "https://interwood.pk/media/catalog/categorymenu/Kids_Storage_Tab_Thumbnail.jpg",
          type: array("Kids", "STORAGE"),
        },
        {
          name: "TABLES & DESKS",
          img: "https://interwood.pk/media/catalog/categorymenu/Home_Office_Desk_2.jpg",
          type: array("Kids", "TABLES & DESKS"),
        },
        {
          name: "KIDS SEATING & CHAIRS",
          img: "https://interwood.pk/media/catalog/categorymenu/Kids_Seating_chairs.jpg",
          type: array("Kids", "KIDS SEATING & CHAIRS"),
        },
      ],
    },
    {
      name: "Dining",
      img: "https://interwood.pk/media/catalog/categorymenu/dining_room_furniture_1.jpg",
      subCategories: [
        {
          name: "KITCHEN & DINING ROOM FURNITURE",
          img: "https://interwood.pk/media/catalog/categorymenu/Kitchen_dining_room_Furniture.jpg",
          type: array("Dining", "KITCHEN & DINING ROOM FURNITURE"),
        },
      ],
    },
    {
      name: "Office",
      img: "https://interwood.pk/media/catalog/categorymenu/office_furniture.jpg",
      subCategories: [
        {
          name: "OFFICE TABLES",
          img: "https://interwood.pk/media/catalog/categorymenu/Office_Tables.jpg",
          type: array("Office", "OFFICE TABLES"),
        },
        // {
        //   name: "OFFICE CHAIRS",
        //   img: "https://interwood.pk/media/catalog/categorymenu/Office_Chairs.jpg",
        //   type: array("Office", "OFFICE CHAIRS"),
        // },
        // {
        //   name: "WORKSTATIONS",
        //   img: "https://interwood.pk/media/catalog/categorymenu/Workstations.jpg",
        //   type: array("Office", "WORKSTATIONS"),
        // },
        {
          name: "SEATING",
          img: "https://interwood.pk/media/catalog/categorymenu/Office_Furniture.jpg",
          type: array("Office", "SEATING"),
        },
        // {
        //   name: "CO-WORKING SPACES",
        //   img: "https://interwood.pk/media/catalog/categorymenu/CO_-_WORKING_Spaces.jpg",
        //   type: array("Office", "CO-WORKING SPACES"),
        // },
        {
          name: "OFFICE EXECUTIVE FURNITURE SETS",
          img: "https://interwood.pk/media/catalog/categorymenu/Office_Ecxecutive_Furniture_Sets_2.jpg",
          type: array("Office", "OFFICE EXECUTIVE FURNITURE SETS"),
        },
        {
          name: "STORAGE",
          img: "https://interwood.pk/media/catalog/categorymenu/Storage_OFFICE__1.jpg",
          type: array("Office", "STORAGE"),
        },
      ],
    },
    {
      name: "Kitchens",
      img: "https://interwood.pk/media/catalog/categorymenu/kitchen_design_2.jpg",
      subCategories: [
        {
          name: "KITCHEN DESIGNS",
          img: "https://interwood.pk/media/catalog/categorymenu/Kitchen_Designs.jpg",
          type: array("Kitchens", "KITCHEN DESIGNS"),
        },
        // {
        //   name: "KITCHEN ACCESSORIES",
        //   img: "https://interwood.pk/media/catalog/categorymenu/Kitchen_Appliances.jpg",
        //   type: array("Kitchens", "KITCHEN ACCESSORIES"),
        // },
        // {
        //   name: "KITCHEN APPLIANCES",
        //   img: "https://interwood.pk/media/catalog/categorymenu/Kitchen_Accessories.jpg",
        //   type: array("Kitchens", "KITCHEN APPLIANCES"),
        // },
      ],
    },
    // {
    //   name: "Doors",
    //   img: "https://interwood.pk/media/catalog/categorymenu/door_designs_in_Pakistan_1.jpg",
    //   subCategories: [
    //     {
    //       name: "MAIN DOORS",
    //       img: "https://interwood.pk/media/catalog/categorymenu/Main_Doors.jpg",
    //       type: array("Doors", "MAIN DOORS"),
    //     },
    //     {
    //       name: "PANEL DOORS",
    //       img: "https://interwood.pk/media/catalog/categorymenu/Panel_Doors.jpg",
    //       type: array("Doors", "PANEL DOORS"),
    //     },
    //     {
    //       name: "GLASS DOOR",
    //       img: "https://interwood.pk/media/catalog/categorymenu/Glass_Door.jpg",
    //       type: array("Doors", "GLASS DOOR"),
    //     },
    //     {
    //       name: "VENEER DOOR",
    //       img: "https://interwood.pk/media/catalog/categorymenu/Veneer_Door.jpg",
    //       type: array("Doors", "VENEER DOOR"),
    //     },
    //     {
    //       name: "THERMOSET DOORS",
    //       img: "https://interwood.pk/media/catalog/categorymenu/Thermoset_Doors.jpg",
    //       type: array("Doors", "THERMOSET DOORS"),
    //     },
    //     {
    //       name: "PAINTED DOOR",
    //       img: "https://interwood.pk/media/catalog/categorymenu/Painted_Door.jpg",
    //       type: array("Doors", "PAINTED DOOR"),
    //     },
    //     {
    //       name: "LAMINATED DOOR",
    //       img: "https://interwood.pk/media/catalog/categorymenu/Laminated_Door.jpg",
    //       type: array("Doors", "LAMINATED DOOR"),
    //     },
    //     {
    //       name: "SLIDING DOOR",
    //       img: "https://interwood.pk/media/catalog/categorymenu/Sliding_Door.jpg",
    //       type: array("Doors", "SLIDING DOOR"),
    //     },
    //   ],
    // },
    {
      name: "Wardrobes",
      img: "https://interwood.pk/media/catalog/categorymenu/wardrobe_design_2.jpg",
      subCategories: [
        {
          name: "BUILT-IN WARDROBES",
          img: "https://interwood.pk/media/catalog/categorymenu/Built-In_Wardrobes.jpg",
          type: array("Wardrobes", "BUILT-IN WARDROBES"),
        },
        {
          name: "3 DOORS WARDROBES",
          img: "https://interwood.pk/media/catalog/categorymenu/3-Door_Wardrobes.jpg",
          type: array("Wardrobes", "3 DOORS WARDROBES"),
        },
        {
          name: "SLIDING WARDROBES",
          img: "https://interwood.pk/media/catalog/categorymenu/Sliding_Wardrobe_Tab_Thumbnail.jpg",
          type: array("Wardrobes", "SLIDING WARDROBES"),
        },
        {
          name: "4 DOORS WARDROBES",
          img: "https://interwood.pk/media/catalog/categorymenu/4_Doors_Wardrobe_Tab_Thumbnail.jpg",
          type: array("Wardrobes", "4 DOORS WARDROBES"),
        },
        {
          name: "2 DOORS WARDROBES",
          img: "https://interwood.pk/media/catalog/categorymenu/2_Doors_Wardrobe_Tab_Thumbnail.jpg",
          type: array("Wardrobes", "2 DOORS WARDROBES"),
        },
      ],
    },
  ];
  return categories;
};

export default Categories;
