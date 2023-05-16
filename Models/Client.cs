using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class Client
    {
        [Key]
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
        public string iva { get; set; }

        [Required]
        [RegularExpression(@"^\d{10}$")]
        public string telefono { get; set; }

        [Required]
        [StringLength(300)]
        public string comentarios { get; set; }
        public int userId { get; set; }

        [ForeignKey("userId")]
        public User? user { get; set; }

        public ICollection<Schedule>? schedules { get; set; }

        public int sellerId { get; set; }

        [ForeignKey("sellerId")]
        public Seller? seller { get; set; }

        public int currentAcountId { get; set; }

        [ForeignKey("currentAcountId")]
        public CurrentAcount? currentAcount { get; set; }

        public ICollection<CustomerDiscount>? customerDiscounts { get; set; }

        // public Client()
        // {
        //     razonSocial = "";
        //     cuit = "";
        //     calle = "";
        //     coordenadas = "";
        //     telefono = "";
        //     comentarios = "";
        //     localidad = "";
        //     schedule = new Schedule();
        //     seller = new Seller();
        //     currentAcount = new CurrentAcount();
        //     customerDiscounts = new List<CustomerDiscount>();
        // }
    }
}
