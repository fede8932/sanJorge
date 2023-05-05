using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class Client
    {
        public int id { get; set; }

        [Required]
        public string razonSocial { get; set; }

        [Required]
        public string cuit { get; set; }

        [Required]
        public string calle { get; set; }

        [Required]
        public int altura { get; set; }

        [Required]
        public string coordenadas { get; set; }

        [Required]
        public string localidad { get; set; }

        [Required]
        public int codigoPostal { get; set; }

        [Required]
        public float iva { get; set; }

        [Required]
        [RegularExpression(@"^\d{10}$")]
        public string telefono { get; set; }

        [Required]
        public string comentarios { get; set; }
        public int userId { get; set; }
        public User user { get; set; }

        public Schedule schedule { get; set; }

        public int sellerId { get; set; }
        public Seller seller { get; set; }

        public int currentAcountId { get; set; }
        public CurrentAcount currentAcount { get; set; }

        public ICollection<CustomerDiscount> customerDiscounts { get; set; }

        public Client()
        {
            razonSocial = "";
            cuit = "";
            calle = "";
            coordenadas = "";
            telefono = "";
            comentarios = "";
            localidad = "";
            user = new User();
            schedule = new Schedule();
            seller = new Seller();
            currentAcount = new CurrentAcount();
            customerDiscounts = new List<CustomerDiscount>();
        }
    }
}
