package AEMLearnProj.core.services.impl;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.net.URLConnection;

import javax.jcr.Session;
import javax.servlet.Servlet;

import org.apache.jackrabbit.api.security.user.Authorizable;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component(service= Servlet.class, 
property = { Constants.SERVICE_DESCRIPTION + "= QR Code Servlet for Authenticator",
		"sling.servlet.methods=" + HttpConstants.METHOD_GET, "sling.servlet.paths=" + "/bin/qrcode" })

public class QRCode extends SlingAllMethodsServlet{
	private static final long serialVersionUID = 1L;
	private final Logger log = LoggerFactory.getLogger(QRCode.class);

	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		String userId = "";
		String secretKey = "";
		
		try {
			ResourceResolver resourceResolver = request.getResourceResolver();
			Authorizable auth = (Authorizable) resourceResolver.adaptTo(Authorizable.class);
			userId = auth.getID();
			log.debug("Generating QR Code for user {} ", userId);
			Session userSession =  resourceResolver.adaptTo(Session.class);
			secretKey = SecurityUtils.updateSecurityKey(auth, userSession);
			URL qrURL = new URL("https://www.google.com/chart?chs=250x250&cht=qr&chl=otpauth://totp/Example:" + userId
			          + "?secret=" + secretKey);
			URLConnection conn = qrURL.openConnection();
			 
		      response.setContentType("image/png");
		      response.setStatus(200);
		 
		      InputStream is = conn.getInputStream();
		      BufferedInputStream bis = new BufferedInputStream(is);
		      OutputStream os = response.getOutputStream();
		      BufferedOutputStream bos = new BufferedOutputStream(os);
		      byte[] buff = new byte[8192];
		      int sz = 0;
		      while ((sz = bis.read(buff)) != -1) {
		        bos.write(buff, 0, sz);
		      }
		      bos.flush();
		}catch(Exception e) {

		}
	}
}
