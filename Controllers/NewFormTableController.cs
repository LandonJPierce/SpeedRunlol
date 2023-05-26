using SpeedRun.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SpeedRun.Controllers
{
    public class NewFormTableController : ApiController
    {
        private DataModel DM = new DataModel();

        public IQueryable<NewForm> Get()
        {
            return DM.NewForms;
        }
    }
}
