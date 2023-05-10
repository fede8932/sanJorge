using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class Movement
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string type { get; set; }

        [Required]
        public DateTime fecha { get; set; }

        [Required]
        public float amount { get; set; }

        public int currentAcountId { get; set; }

        [ForeignKey("currentAcountId")]
        public CurrentAcount currentAcount { get; set; }

        // public Movement()
        // {
        //     type = "";
        //     currentAcounts = new List<CurrentAcount>();
        // }
    }
}
