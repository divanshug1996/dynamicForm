package AEMLearnProj.core.workflow;

import java.util.Objects;

import javax.jcr.Node;

import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.workflow.WorkflowException;
import com.day.cq.workflow.WorkflowSession;
import com.day.cq.workflow.exec.WorkItem;
import com.day.cq.workflow.exec.WorkflowData;
import com.day.cq.workflow.exec.WorkflowProcess;
import com.day.cq.workflow.metadata.MetaDataMap;


@Component(
		property= {
				Constants.SERVICE_DESCRIPTION + " = A simple workflow process implementation",
				Constants.SERVICE_VENDOR + "=Adobe",
				"process.label=My Sample Workflow"
		}
)

public class MyProcess implements WorkflowProcess{

	private static final String TYPE_JCR_PATH = "JCR_PATH";
	
	private static final Logger LOGGER = LoggerFactory.getLogger(MyProcess.class);

	@Override
	public void execute(WorkItem item, WorkflowSession session, MetaDataMap args) throws WorkflowException {
		WorkflowData workFlowData = item.getWorkflowData();
		if (workFlowData.getPayloadType().equals(TYPE_JCR_PATH)) {
			String path = workFlowData.getPayload().toString() + "/" + JcrConstants.JCR_CONTENT;
			try {
				Node node = (Node) session.getSession().getItem(path);
				if(!Objects.isNull(node)){
					node.setProperty("approved", readArgument(args));
					session.getSession().save();
				}
			}catch(Exception e) {
				throw new WorkflowException(e.getMessage(), e);
			}
		}
	}
	
	private boolean readArgument(MetaDataMap args) {
		String argument = args.get("PROCESS_ARGS","false");
		return argument.equalsIgnoreCase("true");
	}	
}
